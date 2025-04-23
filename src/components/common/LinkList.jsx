import { Link } from 'react-router-dom';

export function LinkList(props) {
  const { arr, className } = props;

  return (
    <ul className={className}>
      {arr.map((a) => {
        return (
          <li key={a.name} className={className + '-item'}>
            <Link to={a.to}>{a.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export function HasDepth2LinkList(props) {
  const { arr, depth1ClassName, depth2ClassName } = props;

  return (
    <ul className={depth1ClassName}>
      {arr.map((a) => {
        return (
          <li className={depth1ClassName + '-item'} key={a.name}>
            <Link to={a.to}>{a.name}</Link>
            {a.depth2 && (
              <LinkList arr={a.depth2} className={depth2ClassName} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
