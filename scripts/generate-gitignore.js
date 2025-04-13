const fs = require("fs");
const path = require("path");

const outputPath = path.resolve(__dirname, "../.gitignore");
const repoRoot = path.resolve(__dirname, "..");

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

const appsDir = path.resolve(repoRoot, "apps");
const packagesDir = path.resolve(repoRoot, "packages");

const templatePaths = [
  ...fs
    .readdirSync(appsDir)
    .map((app) => path.resolve(appsDir, app, ".gitignore.template")),
  ...fs
    .readdirSync(packagesDir)
    .map((pkg) => path.resolve(packagesDir, pkg, ".gitignore.template")),
];

let merged = [baseGitignore];

for (const filePath of templatePaths) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8").trim();
    const relativePath = path.relative(repoRoot, filePath); // ✅ 경로를 RNCourse 기준으로 바꿈
    merged.push(`\n# From ${relativePath}\n${content}`);
  }
}

fs.writeFileSync(outputPath, merged.join("\n\n"));
// console.log("✅ .gitignore 병합 완료");
