import "../images.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { HiArrowUpTray } from "react-icons/hi2";
import Footer from "../components/Footer";

function News() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5); // Initial number of posts to display

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "ce9d97bc53ba4883a0d139bb11b2ea1a";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        );
        const data = await response.json();
        setPosts(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <NavBar />

      <div className="flex justify-center self-start gap-[30rem] text-white h-[100px] mt-[100px]  ">
        <div className="text-[36px]">
          <h1>Latest News</h1>
        </div>
        <div className=""></div>
      </div>
      <div className="justify-center">
        <div className="flex justify-center flex-start align-middle mt-8 flex-wrap gap-[77px]">
          {posts.slice(1, visiblePosts).map((post, index) => (
            <div key={index}>
              <section className="w-[489px] h-[480px] p-6  ">
                <div className="text-white solid-[1px]">
                  <div className="">
                    <img
                      className="w-[430px] h-[206px] rounded-[22px] mb-5"
                      src={post.urlToImage}
                      alt="image"
                    />
                    <div className="flex justify-between">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex gap-2 bg-[#3F64EC] border border-[#3F64EC] p-3 rounded-[22px] hover:border hover:border-[#3F64EC] hover:bg-transparent hover:transition-[0.4s] transition-[0.4s]">
                          Open post <HiArrowUpTray className="text-[20px]" />
                        </button>
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[13px] mt-4 text-[#7F8286]">
                        {formatDate(post.publishedAt)}
                      </p>
                      <h3 className="text-[24px]">{post.title}</h3>
                      <p className="text-[15px] text-[#9d9ea1] ">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
        {visiblePosts < posts.length && (
          <div className="flex justify-center mt-[10rem]">
            <button
              className="bg-[#3F64EC] text-white px-4 py-2 rounded-[10px]"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default News;
