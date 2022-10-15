import { Session } from "next-auth";

interface IFeedWrapperProps {
  session: Session;
}

function FeedWrapper({ session }: IFeedWrapperProps) {
  return <div>FeedWrapper</div>;
}

export default FeedWrapper;
