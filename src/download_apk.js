export function downloadApk() {
  const link = document.createElement("a");
  link.href = "./assets/app-release.apk";
  link.download = "UconnectA.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
