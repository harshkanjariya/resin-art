import { useState } from 'react';
import { Form, Input, Select, Button, Upload } from 'antd';
import type { UploadFile } from 'antd';
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { message } from 'antd';

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

  const onFinish = async (values: any) => {
    const hide = message.loading('Uploading images and submitting...', 0);

    try {
      let referenceImageUrl = "";

      // 1. Upload the main reference image if it exists
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0].originFileObj;
        const storageRef = ref(storage, `custom_orders/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        referenceImageUrl = await getDownloadURL(snapshot.ref);
      }

      // 2. Prepare the final data object
      const finalData = {
        ...values,
        referenceImage: referenceImageUrl, // Now a real URL, not an object
        submittedAt: new Date().toISOString()
      };


      // 3. Send to Cloud Function
      const response = await fetch("https://asia-south1-art-world-official.cloudfunctions.net/submitCustomOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();
      if (result.success) {
        message.success('Order placed successfully!');
        form.resetFields();
        setFileList([]);
      }
    } catch (err) {
      console.error(err);
      message.error('Upload failed.');
    } finally {
      hide();
    }
  };

  return (
      <section className="py-20 sm:py-28 bg-brand-gradient scroll-mt-20 flex justify-center">
        <div className="max-w-full sm:max-w-2xl w-full px-0 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-3">
              Custom Order
            </h2>
            <p className="text-[var(--color-text-light)]">
              Tell us about your vision and we’ll create something unique for you.
            </p>
          </div>

          <div className="md:glass rounded-2xl p-0 md:p-8 md:shadow-xl">
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
            >
              {/* Name */}
              <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your name" size="large" className="rounded-xl" />
              </Form.Item>

              {/* Email */}
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

              {/* Phone */}
              <Form.Item name="phone" label="Phone">
                <Input placeholder="Phone number" size="large" className="rounded-xl" />
              </Form.Item>

              {/* Product Type */}
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

              {/* Memory Description */}
              <Form.Item name="memoryDescription" label="Memory Item Description">
                <TextArea
                    rows={4}
                    placeholder="Describe the memory or item you’d like to preserve"
                    className="rounded-xl"
                />
              </Form.Item>

              {/* Reference Image */}
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

              {/* Dynamic specifications */}
              <Form.List name="additionalSpecs">
                {(fields, { add, remove }) => (
                    <>
                      {fields.map((field) => (
                          <div
                              key={field.key}
                              className="flex flex-col sm:flex-row sm:items-start sm:space-x-2 mb-4 flex-wrap"
                          >
                            <Form.Item
                                {...field}
                                name={[field.name, 'label']}
                                rules={[{ required: true, message: 'Enter specification label' }]}
                                className="flex-1 mb-2 sm:mb-0"
                            >
                              <Input placeholder="Specification (e.g., font name, color)" className="rounded-xl" />
                            </Form.Item>

                            <Form.Item
                                {...field}
                                name={[field.name, 'value']}
                                className="flex-1 mb-2 sm:mb-0"
                            >
                              <Input placeholder="Details or value" className="rounded-xl" />
                            </Form.Item>

                            <MinusCircleOutlined
                                onClick={() => remove(field.name)}
                                className="mt-2 sm:mt-0 text-red-500"
                            />
                          </div>
                      ))}

                      <Form.Item>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                            className="rounded-xl"
                        >
                          Add Custom Specification
                        </Button>
                      </Form.Item>
                    </>
                )}
              </Form.List>

              {/* Special Instructions */}
              <Form.Item name="specialInstructions" label="Special Instructions">
                <TextArea
                    rows={3}
                    placeholder="Any specific design, color, or other request?"
                    className="rounded-xl"
                />
              </Form.Item>

              {/* Submit */}
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