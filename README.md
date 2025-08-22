DocuCraft
A beautiful, modern, and performant documentation website template built with Next.js and Tailwind CSS. DocuCraft makes it easy to create and manage high-quality documentation for any project.

About The Project
Good documentation is crucial for the success of any project. It doesn't matter if you have a powerful API if nobody knows how to use it. DocuCraft was built to solve this problem by providing a clean, user-friendly, and easy-to-manage template for all your documentation needs.

This project is built with the latest web technologies to ensure a fast and seamless experience for both developers and end-users.

Key Features
Blazing Fast Performance: Built with Next.js 14 (App Router) for static generation and fast page loads.

Modern Styling: Styled with Tailwind CSS for a utility-first, highly customizable design.

Markdown-Based: All content is written in simple Markdown files, making it easy for anyone to contribute.

File-Based Routing: The navigation and page structure are automatically generated from your file system.

Dark Mode: Includes a beautiful, persistent dark mode theme.

Live Search: A client-side search functionality with debouncing for an instant and efficient search experience.

Syntax Highlighting: Code blocks are automatically highlighted for readability.

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18.x or later)

npm or yarn

Installation
Clone the repository:

git clone https://github.com/your-username/docucraft.git

Navigate to the project directory:

cd docucraft

Install NPM packages:

npm install

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

How to Add Content
Adding new documentation is as simple as creating a new .md file in the docs/ directory.

Each file requires a frontmatter section at the top to define its metadata:

---
title: 'Your Document Title'
date: 'YYYY-MM-DD'
parent: 'parent-document-id' # Use null for top-level pages
order: 1 # Optional: for sorting
author: 'Your Name'
category: 'Category Name'
tags: ["tag1", "tag2"]
---

## Your Content Starts Here

Write your documentation using standard Markdown syntax.

An Ever-Growing Resource
This documentation is a living project. We are committed to continuously updating and expanding our content. New guides, tutorials, and concept explanations will be added regularly on a variety of topics, including:

Core JavaScript Concepts

Advanced React Patterns and Hooks

Web Development Best Practices

And much more!

Our goal is to make DocuCraft a go-to resource for developers looking to learn and grow.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE.txt for more information.