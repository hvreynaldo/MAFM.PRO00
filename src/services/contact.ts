interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch('https://hook.us1.make.com/7dd1md5sdfznvyxilxlfobbdavupbdcc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
}