import { Suspense } from 'react';

export default function Names({ names, isLoading }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isLoading ? (
        <div className="form-group">
          <svg className={`spinner ${isLoading ? 'is-loading' : ''}`} viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </div>
      ) : (
        names.length > 0 && (
          <div className="form-group">
            <h3 className="form-list-title">Suggested Names</h3>
            <ul className="form-list">
              {names.map((name, index) => (
                <li key={index}>{name.name}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </Suspense>
  );
}
