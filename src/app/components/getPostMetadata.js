// Assuming PostMetadata is a JavaScript object representing post metadata
const PostMetadata = {
    title: '',
    date: '',
    subtitle: '',
    slug: ''
};


import fs from 'fs';
import matter from 'gray-matter';


const getPostMetadata = () => {
    const folder = "src/app/markdowns/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName)=> {
        const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            image: matterResult.data.image,
            slug: fileName.replace(".md", "")
        };
    });

    return posts;
};

export default getPostMetadata;