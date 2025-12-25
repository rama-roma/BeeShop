import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center h-100 p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">{t("set.t4")}</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
      >
        {t("set.t3")}
      </button>
    </main>
  );
};

export default ErrorPage;
