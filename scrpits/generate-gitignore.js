const fs = require("fs");
const path = require("path");

const outputPath = path.resolve(__dirname, "../.gitignore");
const baseGitignore = `
# ====== Common Global Ignore Rules ======
.vscode/
.DS_Store
node_modules/
*.log
*.tsbuildinfo
.env*
*.pem
*.p12
*.jks
`.trim();

const templatePaths = [
  ...fs
    .readdirSync(path.resolve(__dirname, "../apps"))
    .map((app) =>
      path.resolve(__dirname, `../apps/${app}/.gitignore.template`)
    ),
  ...fs
    .readdirSync(path.resolve(__dirname, "../packages"))
    .map((pkg) =>
      path.resolve(__dirname, `../packages/${pkg}/.gitignore.template`)
    ),
];

let merged = [baseGitignore];

for (const filePath of templatePaths) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8").trim();
    merged.push(
      `\n# From ${filePath.replace(__dirname + "/../", "")}\n${content}`
    );
  }
}

fs.writeFileSync(outputPath, merged.join("\n\n"));

console.log("✅ .gitignore 자동 병합 완료");
