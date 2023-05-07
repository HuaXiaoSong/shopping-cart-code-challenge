import React, { useEffect } from "react"
import { Button, Form, Input, InputNumber } from "antd"
import { Product } from "../../../interfaces/Product"
import { updateProduct } from "../../../mock/products"

export interface Props {
  product: Product | null
  updated: () => void
}

export function ProductForm({ product, updated }: Props) {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(product)
  }, [product])

  const onFinish = async (values: any) => {
    console.log(values)
    await updateProduct(values)
    updated()
  }

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish} className="mt-8">
      <Form.Item
        label="SKU"
        name="sku"
        rules={[{ required: true, message: "Please provide the product SKU" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please provide the product name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please provide the product description" },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please provide the product price" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}
