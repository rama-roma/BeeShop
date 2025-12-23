import { useNavigate, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../store/api/categoryApi/category";
import { useTranslation } from "react-i18next";
import { useTheme } from "../store/theme/ThemeContext";

const CatalogByIdPage = () => {
  const { id } = useParams();

  const { data } = useGetCategoryByIdQuery(Number(id));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme } = useTheme() as { theme: "light" | "dark" };

  return (
    <>
      <main>
        <div className="mb-10">
          <button
            className="text-start w-40 p-2 border rounded-[5px] bg-[#ffd36a] border-[#ffd36a]  text-[black]"
            onClick={() => navigate(-1)}
          >
            ⮜ {t("xa.xaxa7")}
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide ml-2">
          {data?.subCategories.map((sub) => (
            <div
              key={sub.id}
              className={`w-auto h-20 pr-5 pl-5 text-[13px] flex items-center justify-center rounded-2xl shadow-lg gap-3
            ${theme === "dark" ? 
                "bg-[#3b3b3b] hover:bg-[#ffd36a] hover:text-[black]" 
                : 
                "bg-[#ffffff70] hover:bg-[#ffd36a] border hover:shadow-2xl   border-gray-200 hover:border-[#ffd36a] "}
            `}
            >
              <img
                src={`https://store-api.softclub.tj/images/${sub.subCategoryImage}`}
                className="w-10 h-10 object-cover rounded-[5px]"
              />
              <h1>{sub.subCategoryName}</h1>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CatalogByIdPage;
