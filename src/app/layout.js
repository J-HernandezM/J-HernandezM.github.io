import { Source_Code_Pro } from 'next/font/google';
import './globals.css';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
});

export const metadata = {
  title: 'Juan Jose Hernandez | Portafolio',
  description: 'Frontend Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={`${sourceCodePro.className} ${sourceCodePro.variable} bg-bgWhite dark:bg-bgBlack dark:text-pWhite text-pBlack`}>{children}</body>
    </html>
  );
}
