'use client';

import TextFormInput from '@/components/from/TextFormInput';
import TextAreaFormInput from '@/components/from/TextAreaFormInput';
import ChoicesFormInput from '@/components/from/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ConstructionRequestForm = () => {
  const schema = yup.object({
    projectName: yup.string().required('Please enter project name'),
    description: yup.string().required('Please enter description'),
    budget: yup.string().required('Please enter budget'),
    location: yup.string().required('Please enter location'),
    city: yup.string().required('Please select city'),
    country: yup.string().required('Please select country'),
    deadline: yup.string().optional(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Construction request:', data);
    // Ici tu enverras les données au backend Laravel
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle as="h4">Demande de projet de construction</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg={6} className="mb-3">
              <TextFormInput
                control={control}
                name="projectName"
                placeholder="Enter project name"
                label="Nom du projet"
              />
            </Col>

            <Col lg={6} className="mb-3">
              <TextFormInput
                control={control}
                name="budget"
                placeholder="Enter budget"
                label="Budget (€)"
              />
            </Col>

            <Col lg={12} className="mb-3">
              <TextAreaFormInput
                control={control}
                name="description"
                placeholder="Enter project description"
                label="Description"
                rows={4}
              />
            </Col>

            <Col lg={6} className="mb-3">
              <TextFormInput
                control={control}
                name="location"
                placeholder="Enter location"
                label="Localisation"
              />
            </Col>

            <Col lg={3} className="mb-3">
              <label htmlFor="choices-city" className="form-label">
                Ville
              </label>
              <ChoicesFormInput
                className="form-control"
                id="choices-city"
                data-choices
                data-choices-groups
                data-placeholder="Select City"
              >
                <option>Choose city</option>
                <optgroup label="FR">
                  <option value="Paris">Paris</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Marseille">Marseille</option>
                </optgroup>
                <optgroup label="US">
                  <option value="New York">New York</option>
                  <option value="Washington">Washington</option>
                </optgroup>
              </ChoicesFormInput>
            </Col>

            <Col lg={3} className="mb-3">
              <label htmlFor="choices-country" className="form-label">
                Pays
              </label>
              <ChoicesFormInput
                className="form-control"
                id="choices-country"
                data-choices
                data-choices-groups
                data-placeholder="Select Country"
              >
                <option>Choose country</option>
                <optgroup>
                  <option value="FR">France</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                </optgroup>
              </ChoicesFormInput>
            </Col>

            <Col lg={6} className="mb-3">
              <TextFormInput
                control={control}
                name="deadline"
                type="date"
                placeholder="Select deadline"
                label="Date limite (optionnel)"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <div className="mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={2}>
            <Button variant="outline-primary" type="submit" className="w-100">
              Envoyer
            </Button>
          </Col>
          <Col lg={2}>
            <Button variant="danger" type="reset" className="w-100">
              Annuler
            </Button>
          </Col>
        </Row>
      </div>
    </form>
  );
};

export default ConstructionRequestForm;
