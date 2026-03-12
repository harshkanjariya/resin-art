import { useState } from 'react';
import { Form, Input, Select, Button, Upload } from 'antd';
import type { UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const productTypes = [
  { value: 'jewelry', label: 'Resin Jewelry' },
  { value: 'home-decor', label: 'Home Decor' },
  { value: 'coasters', label: 'Coasters & Trays' },
  { value: 'wedding', label: 'Wedding Flower Preservation' },
  { value: 'pregnancy', label: 'Pregnancy Kit Preservation' },
  { value: 'custom', label: 'Custom Memory Art' },
];

export default function CustomOrderForm() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = (values: Record<string, unknown>) => {
    console.log('Custom order:', { ...values, fileList });
    form.resetFields();
    setFileList([]);
  };

  return (
    <section id="custom-order" className="py-20 sm:py-28 bg-brand-gradient scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
            Custom Order
          </h2>
          <p className="text-[var(--color-text-light)]">
            Tell us about your vision and we’ll create something unique for you.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8 shadow-xl">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your name" size="large" className="rounded-xl" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="you@example.com" size="large" className="rounded-xl" />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input placeholder="Phone number" size="large" className="rounded-xl" />
            </Form.Item>
            <Form.Item
              name="productType"
              label="Type of Product"
              rules={[{ required: true, message: 'Please select a product type' }]}
            >
              <Select
                placeholder="Select product type"
                size="large"
                options={productTypes}
                className="rounded-xl"
              />
            </Form.Item>
            <Form.Item
              name="memoryDescription"
              label="Memory Item Description"
            >
              <TextArea
                rows={4}
                placeholder="Describe the memory or item you’d like to preserve (e.g. wedding bouquet, pregnancy test, baby hospital tag…)"
                className="rounded-xl"
              />
            </Form.Item>
            <Form.Item name="referenceImage" label="Upload Reference Image">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={({ fileList: next }) => setFileList(next)}
                beforeUpload={() => false}
                maxCount={1}
              >
                <div>
                  <UploadOutlined />
                  <div className="mt-1 text-xs">Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item name="specialInstructions" label="Special Instructions">
              <TextArea
                rows={3}
                placeholder="Any specific colors, size, or design preferences?"
                className="rounded-xl"
              />
            </Form.Item>
            <Form.Item className="mb-0">
              <Button type="primary" htmlType="submit" size="large" block className="rounded-xl h-12 font-medium">
                Start My Custom Artwork
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
