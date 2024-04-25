import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <section className='space-y-8 max-w-[800px] mx-auto'>
      <h1 className='text-4xl font-bold'>Figma to Next.js + TailwindCSS Exercise</h1>

      <p>
        This project is a response to a take-home assignment provided by NoxuData as part of the interview process. The
        assignment involved developing a portion of a design provided in Figma using Next.js, TypeScript, and Tailwind
        CSS.
      </p>

      <h2 className='text-2xl font-bold'> Figma Design</h2>

      <p>
        The design file was provided by NoxuData. It included various components and styles that needed to be
        implemented into a functional web application.
      </p>

      <h2 className='text-2xl font-bold'>Technologies Used</h2>
      <div className='space-y-2'>
        <p>
          <strong>Next.js:</strong> Next.js was chosen as the framework for building the web application due to its ease
          of use, server-side rendering capabilities, and excellent developer experience.
        </p>
        <p>
          <strong>TypeScript:</strong> TypeScript was utilized to bring static typing to the project, enhancing code
          quality and developer productivity.
        </p>
        <p>
          <strong>Tailwind CSS:</strong> Tailwind CSS was the chosen utility-first CSS framework for styling the
          components. Its utility classes allowed for rapid styling without the need for writing custom CSS.
        </p>
      </div>

      <h2 className='text-2xl font-bold'>Implementation Details</h2>
      <div className='space-y-2'>
        <p>
          <strong>Button Components:</strong> Implemented the button components as per the provided design. While the
          buttons are not functional in this exercise, they are styled and structured according to the design
          specifications.
        </p>
        <p>
          <strong>Folder Structure:</strong> Organized the project structure following best practices for Next.js
          applications, separating components, pages, and styles into their respective directories.
        </p>
        <p>
          <strong> Type Definitions:</strong> Utilized TypeScript to define types for props, ensuring type safety and
          better code documentation.
        </p>
      </div>
      <p></p>
    </section>
  );
};

export default page;
