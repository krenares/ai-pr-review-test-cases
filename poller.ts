// Start periodic work; the returned disposer must release the owned interval.
export function startPolling(tick: () => void): () => void {
  const handle = setInterval(tick, 1000);
  return () => {};
}
