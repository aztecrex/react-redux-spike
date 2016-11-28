
const Commit = ({
  id,
  externalLocation,
  title,
  reviewedBy,
  status
  }) => {

  return (
    <div className="commit">
      <div className="commit-id" >
        {id}
      </div>
      <div className="commit-title" >
        {title}
      </div>
      <div className = "reviewed-by" >
        reviewed
      </div>
      <div className = "review-button" />
    </div>
  );

};
