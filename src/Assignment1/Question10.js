import { useEffect, useState } from "react";

const Question10 = () => {

    const [blog, setBlog] = useState([
        {
            title: "Science",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        },
        {
            title: "Sports",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        },
        {
            title: "Movies",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        }
    ])
    const [selectedData, setSelectedData] = useState()

    const handleDetail = (e) => {
        console.log(e.target.value, "obj")
        let blogname = e.target.value;
        let newData = blog.filter(val => val.title == blogname)
        setSelectedData(newData)
        console.log(selectedData, 'new---')
    }

    useEffect(() => {
      console.log(selectedData)
    }, [selectedData])
    


    return (
        <div>
            <input value={blog} onChange={(e)=>setBlog(e.target.value)}/>
            <select name="blog_data" id="blog" onChange={handleDetail}>
                {blog.map((val, index) => <option value={val.title}>{val.title}</option>)}

            </select>
            {selectedData?.length > 0 &&
                selectedData.map((val, index) => (
                    <div key={index}>
                        <p>{val.title}</p>
                        <p>{val.description}</p>
                        <p>{val.type}</p>
                        <p>{val.date}</p>
                    </div>
                ))}
        </div>
    );
}
export default Question10;