import { useState, useEffect } from "react";
import PageContainer from "../components/layout/PageContainer/PageContainer";
import CommentsTable, {
  IUserData,
} from "../components/ui/CommentsTable/CommentsTable";

const DataPage: React.FC = () => {
  const [results, setResults] = useState<IUserData[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  /** fetch comments from database */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const req = await fetch("http://localhost:3000/api/get");
        const res = await req.json();
        if (!res.success) {
          console.error(res.message);
          return;
        }
        setResults(res.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PageContainer>
      {isLoading ? <p>Loading...</p> : <CommentsTable data={results} />}
    </PageContainer>
  );
};

export default DataPage;
