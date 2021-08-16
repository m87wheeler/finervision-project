import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 90%;
  max-height: 25rem;
  margin: 0 auto;
  overflow-y: scroll;

  th {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  font-size: var(--font-xs);
  text-align: left;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background: var(--primary);
  }

  .shade {
    background: rgba(0, 0, 0, 0.1);
  }

  tr {
    &:hover {
      background: rgba(0, 0, 0, 0.125);
    }

    &.shade {
      &:hover {
        background: rgba(0, 0, 0, 0.175);
      }
    }
  }
`;
