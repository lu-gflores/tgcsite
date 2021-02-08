import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PagePagination = ({pageCount, handlePageChange, page}) => {
    return (
        <Pagination defaultActivePage={page}
        onPageChange={handlePageChange}
         totalPages={pageCount}
         />
    )

    }
export default PagePagination
