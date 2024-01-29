import MainHomeLayout from "@/layouts/MainHomePage/layout.home";
import { sendRequest } from "@/services/api";
import { useSearchParams } from "next/navigation";
export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = searchParams["currentPage"] ?? 1;
  console.log("🚀 ~ currentPage:", currentPage);
  const pageSize = searchParams["pageSize"] ?? 3;
  console.log("🚀 ~ pageSize:", pageSize);
  const dataProducts = await sendRequest<IBackendRes<IProduct[]>>({
    url: `${process.env.BACKEND_URL}/api/v1/products`,
    method: "GET",
    queryParams: { currentPage, pageSize },
  });
  console.log("🚀 ~ dataProducts:", dataProducts?.filteredProductCount);
  console.log("🚀 ~ dataProducts:", dataProducts);
  return (
    <>
      <MainHomeLayout
        data={dataProducts?.products ?? []}
        filteredProductCount={dataProducts?.filteredProductCount}
        message={dataProducts?.message}
      />
    </>
  );
}
