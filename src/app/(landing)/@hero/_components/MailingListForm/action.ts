'use server';

import z from 'zod';

const addToMailingListSchema = z.object({
  email: z
    .string()
    .min(1, 'Please provide an email')
    .email('Please provide a valid email'),
});

export type AddToMailingListResult =
  | {
      status: 'error';
      error?: z.inferFlattenedErrors<typeof addToMailingListSchema>;
    }
  | {
      status: 'success' | 'initial';
    };

export async function addToMailingList(
  _: unknown,
  formData: FormData,
): Promise<AddToMailingListResult> {
  'use server';
  await new Promise((res) => setTimeout(() => res(''), 2000));
  const parsed = await addToMailingListSchema.safeParseAsync({
    email: formData.get('email'),
  });

  if (!parsed.success) {
    return {
      status: 'error',
      error: parsed.error.flatten(),
    };
  }

  // TODO: Add mailing thingy for email
  return { status: 'success' };
}
