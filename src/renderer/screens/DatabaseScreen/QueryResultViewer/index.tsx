import React from 'react';
import {
  QueryResultChangeProvider,
  useQueryResultChange,
} from 'renderer/contexts/QueryResultChangeProvider';
import QueryResultTable from './QueryResultTable';
import styles from './styles.module.scss';
import Button from 'renderer/components/Button';
import { QueryResult } from 'types/SqlResult';

function QueryResultBody({ result }: { result?: QueryResult | null }) {
  const { changeCount } = useQueryResultChange();

  return (
    <div className={styles.result}>
      <QueryResultTable result={result} />
      <div className={styles.footer}>
        <Button primary={!!changeCount}>
          {changeCount ? `Commit (${changeCount})` : 'Commit'}
        </Button>
      </div>
    </div>
  );
}

function QueryResultViewer({ result }: { result?: QueryResult | null }) {
  return (
    <QueryResultChangeProvider>
      <QueryResultBody result={result} />
    </QueryResultChangeProvider>
  );
}

export default React.memo(QueryResultViewer);
