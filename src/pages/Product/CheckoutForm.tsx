import React from "react";
import { Button, Form, Input } from "antd";

export interface CheckoutInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Props {
  submitForm: (info: CheckoutInfo) => void;
}

export function CheckoutForm({ submitForm }: Props) {
  const [form] = Form.useForm();
  const onFinish = async (values: CheckoutInfo) => {
    submitForm(values);
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish} className="mt-8">
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please provide your First Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please provide your Last Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please provide your Email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
