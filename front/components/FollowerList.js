import { PropTypes } from "prop-types";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowerList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(Item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={Item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowerList.propTypes = {
  header: PropTypes.string.isRequire,
  data: PropTypes.array.isRequire,
};

export default FollowerList;
