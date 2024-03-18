import { NextResponse, NextRequest } from 'next/server';
import z, { ZodError } from 'zod';

export const runtime = 'edge';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Please provide an email')
    .email('Please provide a valid email'),
});

export type POSTRequest = z.infer<typeof schema>;

export type POSTResponse =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      error: z.inferFormattedError<typeof schema>;
    };

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload = await schema.parseAsync({
      email: formData.get('email'),
    });

    // TODO: Added logic for adding to mailing list
    console.log(payload);
    await new Promise((res) => setTimeout(() => res(''), 1000));

    return NextResponse.json({
      status: 'success',
      message: 'Email has been subscribed to updates.',
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          status: 'error',
          error: err.format(),
        },
        { status: 400, statusText: 'Bad payload' },
      );
    } else {
      console.error(err);
      return NextResponse.json(
        {
          status: 'error',
          error: 'Unknown error. Please try again later.',
        },
        {
          status: 500,
          statusText: 'Internal server error',
        },
      );
    }
  }
}
