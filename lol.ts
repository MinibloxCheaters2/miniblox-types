const PREFIX = "src";

async function walk(currentPath = ""): Promise<string[]> {
	const paths: string[] = [];
	const dir = currentPath ? `${PREFIX}/${currentPath}` : PREFIX;

	for await (const entry of Deno.readDir(dir)) {
		if (entry.isFile) {
			const path = currentPath ? `${currentPath}/${entry.name}` : entry.name;

			if (path === "index.d.ts") continue;
			if (!path.endsWith(".d.ts")) continue;

			paths.push(path);
			continue;
		}

		if (entry.isDirectory) {
			paths.push(
				...(await walk(
					currentPath ? `${currentPath}/${entry.name}` : entry.name,
				)),
			);
			continue;
		}

		throw new Error(`Unexpected directory entry: ${entry.name}`);
	}

	return paths;
}

const allPaths = await walk();

allPaths
	.sort((a, b) => a.localeCompare(b))
	.map((p) => p.replace(/\.d\.ts$/, ""))
	.map((p) => `export * from "./${p}";`)
	.forEach((line) => console.log(line));

