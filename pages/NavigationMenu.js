import Link from 'next/link';
import chatBox from 'pages/implementation/chatBox.js';
import courseFlowSelection from 'pages/implementation/courseFlowSelection.js'
import FAQ from 'pages/implementation/FAQ.js'
import importantLinks from 'pages/implementation/importantLinks.js'
import interviewHelp from 'pages/implementation/interviewHelp.js'
import parkingSelection from 'pages/implementation/parkingSelection.js'
import RMP from 'pages/implementation/RMP.js'

function NavigationMenu() {
    return (
        <div className="nav-menu">
            <Link href="../implementation/chatBox">chat Box</Link>
            <Link href="../implementation/courseFlowSelection">Course Flow Diagrams</Link>

            <Link href="../implementation/FAQ">FAQ </Link>

            <Link href="../implementation/importantLinks">Important Links </Link>

            <Link href="../implementation/interviewHelp">Interview Help </Link>

            <Link href="../implementation/parkingSelection">Parking Finder </Link>

            <Link href="../implementation/RMP">Rate my Professor Add-on </Link>

            </div>
    );
}

export default NavigationMenu;
