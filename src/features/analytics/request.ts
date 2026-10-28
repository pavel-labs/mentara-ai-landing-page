export const fetchWithTimeout = async (
  input: RequestInfo | URL,
  init: RequestInit,
  timeoutMs = 3000,
): Promise<Response> => {
  const controller =
    typeof AbortController === 'undefined' ? undefined : new AbortController();
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_resolve, reject) => {
    timeoutId = setTimeout(() => {
      controller?.abort();
      reject(new Error('Request timed out'));
    }, timeoutMs);
  });

  try {
    const options = controller ? { ...init, signal: controller.signal } : init;
    return await Promise.race([fetch(input, options), timeout]);
  } finally {
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  }
};
