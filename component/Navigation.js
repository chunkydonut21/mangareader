import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Container,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <Navbar className="shadow p-2 bg-white rounded" light expand="md">
                <Container>
                    <NavbarBrand href="/">MANGA READER</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <InputGroup>
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="search placeholder"
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Link href="/">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </InputGroupText>
                                        </Link>
                                    </InputGroupAddon>
                                </InputGroup>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/popular">Popular</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/latest">Latest</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/latest">Manga List</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    John Doe
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Dashboard</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation
