function padLeft(contentStr, padCount = 2, padStr = '0') {
  contentStr = String(contentStr)
  return contentStr.padStart(padCount, padStr)
}
