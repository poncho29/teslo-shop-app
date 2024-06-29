'use client';

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";

import clsx from "clsx";

import { generatePaginationNumbers } from "@/utils";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);

  if (currentPage < 1 || isNaN(Number(pageString))) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathname}?${params.toString()}`
    }

    if (Number(pageNumber) <= 0) {
      // The previous page no exists
      return `${pathname}`
    }

    if (Number(pageNumber) > totalPages) {
      // The next page no exists
      return `${pathname}?${params.toString()}`
    }

    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex text-center justify-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li>
            <Link
              href={createPageUrl(currentPage - 1)}
              className={`
                page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none
                transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200
                focus:shadow-none ${currentPage <= 1 ? 'opacity-50 cursor-default' : ''}
              `}
            >
              <IoChevronBackOutline size={28} />
            </Link>
          </li>


          {allPages.map((page, index) => (
            <li key={`${page}-${index}`}>
              <Link
                href={createPageUrl(page)}
                className={
                  clsx(
                    `page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none
                    transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200
                    focus:shadow-none`,
                    { '!text-white !shadow-sm !bg-blue-500 hover:!text-white hover:!bg-blue-700': page === currentPage }
                  )
                }
              >
                { page }
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={createPageUrl(currentPage + 1)}
              className={`
                page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none
                transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200
                focus:shadow-none ${currentPage === totalPages ? 'opacity-50 cursor-default' : ''}
              `}
            >
              <IoChevronForwardOutline size={28} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
