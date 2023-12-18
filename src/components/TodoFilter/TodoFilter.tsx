import { useEffect, useState } from 'react';
import { useMyContext } from '../../context/myContext';

export const TodoFilter: React.FC = () => {
  const [qwerty, setQwerty] = useState<string>('');

  const { searchTodo, handleCompletedTodos } = useMyContext();

  useEffect(() => {
    searchTodo(qwerty);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qwerty]);

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={(event) => handleCompletedTodos(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={qwerty}
          onChange={(event) => {
            setQwerty(event.target.value);
          }}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {qwerty && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQwerty('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
