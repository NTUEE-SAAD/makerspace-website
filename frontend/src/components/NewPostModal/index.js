import { useEffect, useRef, useState } from "react";
import { Modal, Input, Row, Col, Typography } from "antd";
import styles from "./styles.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewPostModal = ({ visible, setVisible, handleSubmit }) => {
  const titleRef = useRef();
  const tagRef = useRef();
  const quillRef = useRef();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setVisible(false);
    setTitle("");
    setTags("");
    setContent("");
  };

  const handleOk = async () => {
    setLoading(true);
    const description = tags.split(",").map((tag) => tag.trim());
    await handleSubmit({
      title,
      content,
      description,
    });
    setLoading(false);
    handleCancel();
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleQuillChange = () => {
    const editor = quillRef.current.getEditor();
    setContent(quillRef.current.makeUnprivilegedEditor(editor).getHTML());
  };

  useEffect(() => {
    if (visible) {
      titleRef.current.focus();
      setContent("");
    }
  }, [visible]);

  return (
    <Modal
      title="Create New Post"
      width="60vw"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
    >
      <div className={styles.contentWrapper}>
        <Row gutters={[16, 32]} justify="left">
          <Col span={3}>
            <Typography.Title level={3}>Title</Typography.Title>
          </Col>
          <Col span={5} />
          <Col span={6}>
            <Input
              ref={titleRef}
              value={title}
              allowClear
              onPressEnter={() => tagRef.current.focus()}
              onChange={handleChange(setTitle)}
            ></Input>
          </Col>
          <Col span={10} />
        </Row>
        <Row gutter={[16, 16]} align="middle" justify="left">
          <Col span={3}>
            <Typography.Title level={3}>Tags</Typography.Title>
          </Col>
          <Col span={5}>(seperate with commas)</Col>
          <Col span={6}>
            <Input
              ref={tagRef}
              value={tags}
              allowClear
              onPressEnter={() => quillRef.current.focus()}
              onChange={handleChange(setTags)}
            ></Input>
          </Col>
          <Col span={10} />
        </Row>
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <ReactQuill
              ref={quillRef}
              style={{ height: "30vh" }}
              preserveWhitespace
              theme="snow"
              onChange={handleQuillChange}
              value={content}
            ></ReactQuill>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};
