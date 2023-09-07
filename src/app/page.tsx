"use client";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import useUsers from "./hooks/useUsers";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Home() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { data, isError, isLoading } = useUsers({ page: currentPage + 1 });

    const pageCount = useMemo<number>(() => {
        if (!data) {
            return 1;
        }
        return data?.total_pages;
    }, [data]);

    if (isError) return <h1>Error ...</h1>;
    if (isLoading) return <h1>Loading ...</h1>;

    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="App">
            <header>
                <h1 className="text-center mb-5">User Collections !</h1>
                <Header />
            </header>
            <main className="App-Body">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pl-40 pe-40">
                    {data?.data.map((card, index) => (
                        <UserCard
                            key={index}
                            title={card.first_name}
                            description={card.email}
                            imageUrl={card.avatar}
                        />
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </main>
        </div>
    );
}
