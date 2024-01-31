declare module 'pkcs7-padding' {
  type Buf = string | Uint8Array | Uint8ClampedArray
  export function unpad<T extends Buf>(input: T): T
}
