import { Form, Input, Select, Button, message, Row, Col } from "antd";
import "tailwindcss/tailwind.css";
import Section from "./Section";
import { useNavigate } from "react-router-dom"; // Use for redirection
import { sendChatData } from "../api/sendChatData";

const { Option } = Select;
const { TextArea } = Input;

const ServiceForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Replace with your API endpoint

      const response = await sendChatData(values);
      console.log("Réponse:", response.data);

      message.success("Formulaire soumis avec succès!");

      // Reset form fields
      form.resetFields();
      navigate("/thank-you");
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      message.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Échec de la soumission:", errorInfo);
  };

  return (
    <Section
      className="pt-20 md:pt-20 bg-gradient-to-b from-gray-200 to-gray-20 min-h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="max-w-4xl mx-auto">
        <div className="px-6 py-8 md:px-16 md:py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Formulaire de Demande
          </h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="space-y-6 bg-white shadow-lg rounded-lg p-8"
          >
            {/* <Form.Item
              label="Prenom"
              name="request_lastname"
              rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
              className="font-semibold"
            >
              <Input
                placeholder="Entrez votre prénom"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

 
            <Form.Item
              label="Nom"
              name="request_name"
              rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
              className="font-semibold"
            >
              <Input
                placeholder="Entrez votre nom"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label="Téléphone"
              name="request_phone"
              rules={[
                { required: true, message: 'Veuillez entrer votre numéro de téléphone' },
                { pattern: /^[0-9]+$/, message: 'Le numéro doit être numérique' },
              ]}
              className="font-semibold"
            >
              <Input
                placeholder="Entrez votre numéro de téléphone"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

         
            <Form.Item
              label="Email"
              name="request_email"
              rules={[
                { required: true, message: 'Veuillez entrer votre adresse email' },
                { type: 'email', message: 'Veuillez entrer une adresse email valide' },
              ]}
              className="font-semibold"
            >
              <Input
                placeholder="Entrez votre adresse email"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item> */}
            <Row gutter={[16, 16]}>
              {/* Prénom */}
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Prénom"
                  name="request_lastname"
                  rules={[
                    { required: true, message: "Veuillez entrer votre prénom" },
                  ]}
                  className="font-semibold"
                >
                  <Input
                    placeholder="Entrez votre prénom"
                    className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>
              </Col>

              {/* Nom */}
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Nom"
                  name="request_name"
                  rules={[
                    { required: true, message: "Veuillez entrer votre nom" },
                  ]}
                  className="font-semibold"
                >
                  <Input
                    placeholder="Entrez votre nom"
                    className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>
              </Col>

              {/* Téléphone */}
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Téléphone"
                  name="request_phone"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre numéro de téléphone",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Le numéro doit être numérique",
                    },
                  ]}
                  className="font-semibold"
                >
                  <Input
                    placeholder="Entrez votre numéro de téléphone"
                    className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>
              </Col>

              {/* Email */}
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="request_email"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre adresse email",
                    },
                    {
                      type: "email",
                      message: "Veuillez entrer une adresse email valide",
                    },
                  ]}
                  className="font-semibold"
                >
                  <Input
                    placeholder="Entrez votre adresse email"
                    className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Type */}
            <Form.Item
              label="Type"
              name="request_who"
              rules={[
                { required: true, message: "Veuillez sélectionner un type" },
              ]}
              className="font-semibold"
            >
              <Select
                placeholder="Sélectionnez un type"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <Option value="entreprise">Artisan</Option>
                <Option value="particulier">Auto entrepreneur</Option>
                <Option value="particulier">PME</Option>
                <Option value="autre">Autre</Option>
              </Select>
            </Form.Item>

            {/* Besoins */}
            <Form.Item
              label="Besoins de Service"
              name="information_request"
              rules={[
                {
                  required: true,
                  message: "Veuillez sélectionner vos besoins",
                },
              ]}
              className="font-semibold"
            >
              <Select
                placeholder="Sélectionnez vos besoins"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <Option value="tarifs">Tarifs</Option>
                <Option value="produit_services">Produits et Services</Option>
                <Option value="support_technique">Support Technique</Option>
              </Select>
            </Form.Item>

            {/* Nouvelle Sélection */}
            <Form.Item
              label="Action"
              name="besoins"
              rules={[
                { required: true, message: "Veuillez sélectionner une action" },
              ]}
              className="font-semibold"
            >
              <Select
                placeholder="Sélectionnez une action"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <Option value="information_request">
                  Demande de renseignements 🔍
                </Option>
                <Option value="request_who">Être rappelé 📞</Option>
              </Select>
            </Form.Item>

            {/* Message */}
            <Form.Item
              label="Message"
              name="initial"
              rules={[
                { required: true, message: "Veuillez entrer un message" },
              ]}
              className="font-semibold"
            >
              <TextArea
                rows={4}
                placeholder="Entrez votre message"
                className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            {/* Bouton de Soumission */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg"
              >
                Soumettre
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Section>
  );
};

export default ServiceForm;
