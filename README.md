## Hello
Quick heads up: Been wrangling with just 50 requests every 12 hours on the News API (yeah, the free plan blues).
Just for comparison, the Business plan offers a lot more firepower 😊

Best regards

![News-App-Search](https://github.com/olgalescuyer/news-app/assets/84182327/27b855db-2905-4c62-9c2d-8834281b715a)



## Development Challenge

The project utilized a modern technology stack, including React, Next.js, and Tailwind CSS, with integration to the News API for real-time content.

Next.js Server Actions: I used server actions to make requests directly from the React client component, allowing for a cleaner structure and better performance. The "Server Actions" in Next.js 14 offer a new approach to server-side logic, simplifying the data flow between server and client. Unlike traditional methods such as API requests or custom routing, Server Actions enable server-side code execution directly from React components.

Using URL search params to manage the search state: To manage search state, I adopted an approach based on searchParams in the URL. This pattern might be new if you're used to handling state on the client side.

useContext: To manage side effects and maintain shared state in the application, I used React's Context API.

Infinite Scroll: To enhance user experience, I integrated an infinite scroll feature, allowing users to load more content as they scroll. This creates a smooth reading experience without interruption.

User Interface with Tailwind CSS: I used Tailwind CSS to design a modern, responsive user interface, ensuring a seamless experience across different devices and screen sizes.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# news-app
