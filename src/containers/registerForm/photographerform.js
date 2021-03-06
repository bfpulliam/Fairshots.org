import React, { useEffect, useState } from "react";
import { Field, FieldArray, Form } from "formik";
import { Button } from "reactstrap";
import { countrylist, causes, languages } from "../../helpers/form-data-options";
import CheckboxesFormArray from "../../components/checkboxesFormArray";

export default function PhotographerForm({ renderField, modalShow, profilePic }) {
    const [picUrl, setPicUrl] = useState("");

    useEffect(
        () => {
            if (typeof profilePic === "string") setPicUrl(profilePic);
        },
        [profilePic]
    );

    return (
        <Form className="container">
            <Field name="Name" label="Name: " component={renderField} type="text" />
            <Field name="Email" label="E-mail: " component={renderField} type="Email" />
            <Field name="Password" label="Password: " component={renderField} type="Password" />
            <Field
                name="ConfirmPassword"
                label="Confirm Password: "
                component={renderField}
                type="Password"
            />
            <Field name="ProfilePic" label="Picture: " component={renderField} type="file" />
            {picUrl !== "" && <img src={picUrl} height="128" width="128" />}
            <Field
                name="Skill"
                label="Skill Level: "
                component={renderField}
                options={["", "Student", "Amateur", "Professional"]}
                type="select"
            />
            <Field name="Biography" label="Biography: " component={renderField} type="textarea" />
            <Field name="Phone" label="Phone: " component={renderField} type="Telephone" />
            <Field name="webpage" label="Webpage: " component={renderField} type="url" />
            <Field name="facebook" label="Facebook: " component={renderField} type="url" />
            <Field name="instagram" label="Instagram: " component={renderField} type="url" />
            <FieldArray
                className="languages"
                name="Languages"
                label="Languages: "
                render={formikProps => <CheckboxesFormArray {...formikProps} options={languages} />}
            />

            <FieldArray
                className="causes"
                name="Causes"
                label="Causes: "
                render={formikProps => <CheckboxesFormArray {...formikProps} options={causes} />}
            />
            <Field name="City" label="City: " component={renderField} options={[]} type="text" />
            <Field
                name="Country"
                label="Country: "
                component={renderField}
                type="select"
                options={countrylist}
            />
            {modalShow !== "update" && (
                <Field
                    name="agreement"
                    label={
                        <p>
                            I agree with{" "}
                            <a
                                id="term-agree"
                                href="#"
                                onClick={e => {
                                    e.preventDefault();
                                    modalShow();
                                }}
                            >
                                terms and conditions:
                            </a>
                        </p>
                    }
                    component={renderField}
                    type="checkbox"
                />
            )}

            <Button color="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}
