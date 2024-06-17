import Link from 'next/link';

const BlogComponent = ({ href, title, description, icon }) => {
  return (
    <Link href={href}
    className="flex flex-col items-center justify-center bg-white border-2 border-blue-600 rounded-lg p-4 m-2 transition duration-300 ease-in-out transform hover:scale-105">
     
        {icon && <div className="mb-2">{icon}</div>}
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
        {description && <p className="text-sm text-blue-600">{description}</p>}
      
    </Link>
  );
};

export default BlogComponent;