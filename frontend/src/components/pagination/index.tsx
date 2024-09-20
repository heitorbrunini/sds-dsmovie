import { PaginationProps } from 'types/movie';
import './styles.css';

function Pagination<T extends { first: boolean; last: boolean; number: number; totalPages: number }>({ page, onChange }: PaginationProps<T>) {


    return (
        <div className="dsmovie-pagination-container">
        <nav aria-label="...">
            <ul className="pagination" data-bs-theme="dark">
                <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                    <a className="page-link " onClick={() => !page.first && onChange(page.number - 1)}>Anterior</a>
                </li>
    
                {Array.from({ length: page.totalPages }, (_, index) => (
                    <li className={`page-item ${index === page.number ? 'active' : ''}`} key={index}>
                        <a className="page-link" onClick={() => onChange(index)}>
                            {index + 1}
                        </a>
                    </li>
                ))}
    
                <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => !page.last && onChange(page.number + 1)}>Próximo</a>
                </li>
            </ul>
        </nav>
    </div>
    
    );
}

export default Pagination;