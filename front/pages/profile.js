import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import FollowingList from "../components/FollowingList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followingList = [
    { nickname: "아이유" },
    { nickname: "소지섭" },
    { nickname: "아이브" },
  ];
  const followerList = [{ nickname: "쏠" }, { nickname: "백예린" }];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
