/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import React, { Component } from 'react';

import withGoogle from './withGoogle';
import withFacebook from './withFacebook';
import withAmazon from './withAmazon';
import withOAuth from './withOAuth';

export { default as withGoogle, GoogleButton } from './withGoogle';
export { default as withFacebook, FacebookButton } from './withFacebook';
export { default as withAmazon, AmazonButton } from './withAmazon';
export { default as withOAuth, OAuthButton } from './withOAuth';

export function withFederated(Comp) {
    const Federated = withOAuth(withAmazon(withGoogle(withFacebook(Comp))));

    return class extends Component {
        render() {
            const federated = this.props.federated || {};
            return (
                <Federated {...this.props} {...federated} />
            )
        }
    }
}
