
import { Montserrat, Elsie } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Mont',
  display: 'swap',
});

const elsie = Elsie({ 
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-Elsie',
  display: 'swap',
});

export const metadata = {
  title: 'Casa Verde',
  description: '7days/Casa-verde',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${elsie.variable} `}>
        {children}
      </body>
    </html>
  );
}