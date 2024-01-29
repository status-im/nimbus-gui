import {
    Nonce,
  } from '@waku/noise'

export interface LostNametag {
    nonce: Nonce;
    value: Uint8Array;
  }
