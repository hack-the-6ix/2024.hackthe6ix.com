'use server';

export type ReceiveUpdatesResponse = {
  errors?: string[];
  success: boolean;
};
export async function receiveUpdates(
  _: ReceiveUpdatesResponse | null,
  data: FormData,
): Promise<ReceiveUpdatesResponse | null> {
  // TODO: Add mailing list stuff
  console.log(data);
  return {
    success: false,
  };
}
