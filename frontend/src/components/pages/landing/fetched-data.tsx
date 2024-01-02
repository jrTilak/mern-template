const FetchedData = ({ data }: { data: any }) => {
  return (
    <div className="bg-muted p-4 rounded-md flex items-center m-auto justify-center py-12">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default FetchedData;
