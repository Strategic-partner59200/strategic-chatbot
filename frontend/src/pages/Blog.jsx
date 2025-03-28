// import React, { useState } from "react";
// import { categories } from "../constants";

// const Blog = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Tous les articles");

//   // const articlesToDisplays = categories['Tous les articles'].slice(0, 3);
//   const articlesToDisplays = categories["Tous les articles"]
//     .slice(0, 4)
//     .map((article, index) => ({
//       ...article,
//       category:
//         index === 0 ? "Marketing" : index === 1 ? "Technologie" : "Admissions",
//     }));

//   // Combine all articles for "Tous les articles" with categories included
//   const combinedArticles = [
//     ...categories["Marketing"].map((item) => ({
//       ...item,
//       category: "Marketing",
//     })),
//     ...categories["Technologie"].map((item) => ({
//       ...item,
//       category: "Technologie",
//     })),
//     ...categories["Admissions"].map((item) => ({
//       ...item,
//       category: "Admissions",
//     })),
//   ];

//   // Shuffle the combined articles for "Tous les articles"
//   const shuffleArray = (array) => {
//     return array
//       .map((item) => ({ ...item, sort: Math.random() }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ sort, ...item }) => item);
//   };

//   const shuffledArticles = shuffleArray(combinedArticles);

//   // Determine the articles to display based on the selected category
//   const articlesToDisplay =
//     selectedCategory === "Tous les articles"
//       ? shuffledArticles
//       : categories[selectedCategory].map((item) => ({
//           ...item,
//           category: selectedCategory,
//         }));

//   // Define category colors
//   const categoryStyles = {
//     Marketing: {
//       text: "text-green-700",
//       bg: "bg-green-100",
//     },
//     Technologie: {
//       text: "text-blue-700",
//       bg: "bg-blue-100",
//     },
//     Admissions: {
//       text: "text-purple-700",
//       bg: "bg-purple-100",
//     },
//   };

//   return (
//     <div className="p-8 mt-32">
//       <div className="articles-section">
//         <h2 className="text-4xl mb-6">Articles à la lune</h2>

//         <div className="flex justify-between items-center gap-4 mb-16">
//           {/* Left card */}
//           {articlesToDisplays.slice(1).map((article) => (
//           <div className="w-1/4 mb-4" key={article.id}>
//             <img
//               src={articlesToDisplays[0].image}
//               alt={articlesToDisplays[0].title}
//               className="w-full h-[50%] object-cover rounded-lg mb-3"
//             />
//             <h4 className="text-sm text-gray-500 mb-2">
//               {articlesToDisplays[2].category}
//             </h4>
//             <h3 className="text-xl font-semibold">
//               {article.title}
//             </h3>
//           </div>
//         ))}

//           {/* Right cards */}
//           <div className="w-1/3">
//             {articlesToDisplays.slice(1).map((article) => (
//               <div key={article.id} className="mb-4">
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-48 object-cover rounded-lg mb-3"
//                 />
//                 <h4 className="text-sm text-gray-500 mb-2">
//                   {articlesToDisplays[0].category}
//                 </h4>
//                 <h3 className="text-xl font-semibold">{article.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {Object.keys(categories).map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 border rounded-lg ${
//               selectedCategory === category
//                 ? "bg-[#8bc98b] text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {articlesToDisplay.map((item) => (
//           <div key={item.id} className=" p-4 text-start">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-[400px] object-cover mb-4 rounded"
//             />
//             <p
//               className={`mt-2 font-medium inline-block px-3 py-2 mb-6 rounded-full ${
//                 categoryStyles[item.category].bg
//               } ${categoryStyles[item.category].text}`}
//             >
//               {item.category}
//             </p>
//             <h3 className="text-lg font-semibold mb-6">{item.title}</h3>
//             <p className="text-gray-700 mt-2">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useState } from "react";
import { categories } from "../constants";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les articles");
  const navigate = useNavigate(); // Initialize useNavigate

  // Combine all articles for "Tous les articles" with categories included
  const combinedArticles = [
    ...categories["Marketing"].map((item) => ({
      ...item,
      category: "Marketing",
    })),
    ...categories["Technologie"].map((item) => ({
      ...item,
      category: "Technologie",
    })),
    ...categories["Admissions"].map((item) => ({
      ...item,
      category: "Admissions",
    })),
  ];

  // Shuffle the combined articles for "Tous les articles"
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...item }) => item);
  };

  const shuffledArticles = shuffleArray(combinedArticles);

  // Determine the articles to display based on the selected category
  const articlesToDisplay =
    selectedCategory === "Tous les articles"
      ? shuffledArticles
      : categories[selectedCategory].map((item) => ({
          ...item,
          category: selectedCategory,
        }));

  // Define category colors
  const categoryStyles = {
    Marketing: {
      text: "text-green-700",
      bg: "bg-green-100",
    },
    Technologie: {
      text: "text-blue-700",
      bg: "bg-blue-100",
    },
    Admissions: {
      text: "text-purple-700",
      bg: "bg-purple-100",
    },
  };

  // Format title for URL
  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="p-8 mt-32">
      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border rounded-lg ${
              selectedCategory === category
                ? "bg-[#8bc98b] text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articlesToDisplay.map((item) => (
          <div
            key={item.id}
            className="p-4 text-start cursor-pointer"
            onClick={() => navigate(`/Blog/${formatTitleForURL(item.title)}`)} // Navigate to the blog URL
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover mb-4 rounded"
            />
            <p
              className={`mt-2 font-medium inline-block px-3 py-2 mb-6 rounded-full ${
                categoryStyles[item.category].bg
              } ${categoryStyles[item.category].text}`}
            >
              {item.category}
            </p>
            <h3 className="text-lg font-semibold mb-6">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
